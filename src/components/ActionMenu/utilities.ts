import {MenuActionDescriptor, MenuGroupDescriptor} from '../../types';

export function sortAndOverrideActionOrder(
  actions: (MenuActionDescriptor | MenuGroupDescriptor)[],
) {
  const sortedActionsWithOverrides = actions
    .filter((action) => action.index !== undefined)
    .sort(({index: indexA = 0}, {index: indexB = 0}) => indexA - indexB);

  if (sortedActionsWithOverrides.length === 0) {
    return actions;
  }

  const actionsWithoutOverrides = actions.filter(
    (action) => action.index === undefined,
  );

  const overriddenActions: (MenuActionDescriptor | MenuGroupDescriptor)[] = [
    ...actionsWithoutOverrides,
  ];

  sortedActionsWithOverrides.forEach((action) => {
    if (action.index !== undefined) {
      overriddenActions.splice(action.index, 0, action);
    }
  });

  return overriddenActions;
}
