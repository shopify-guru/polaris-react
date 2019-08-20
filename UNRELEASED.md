# Unreleased changes

### Breaking changes

### Enhancements

- Added `hideTags` prop to `Filters` ([#2573](https://github.com/Shopify/polaris-react/pull/2573))
- Added `external` prop to `ResourceList` ([#2408](https://github.com/Shopify/polaris-react/pull/2408))
- Added `onMouseEnter` and `onTouchStart` props to `Button` ([#2409](https://github.com/Shopify/polaris-react/pull/2409))
- Added `ariaHaspopup` prop to `Popover` ([#2248](https://github.com/Shopify/polaris-react/pull/2248))
- Updated `OptionList` section title to match `ActionList` section title ([#2300](https://github.com/Shopify/polaris-react/pull/2300))
- Added `pressed` state to `Button` ([#2148](https://github.com/Shopify/polaris-react/pull/2148))
- Added CSS custom properties to `Portal` container ([#2306](https://github.com/Shopify/polaris-react/pull/2306))
- Updated the type of the `label` prop in `ChoiceList` (nested prop of `choices`) from `string` to `ReactNode` ([#2325](https://github.com/Shopify/polaris-react/pull/2325)).
- Added support for explicit order of items in `ActionMenu` ([2057](https://github.com/Shopify/polaris-react/pull/2057))

### Bug fixes

- Fixed a bug where `Navigation` calls `onNavigationDismiss` on large screens when focused and the escape key is pressed ([#2607](https://github.com/Shopify/polaris-react/pull/2607))
- Fixed issue with `Filters` component displaying an undesired margin top and bottom on the button element on Safari ([#2292](https://github.com/Shopify/polaris-react/pull/2292))
- Doesn't render `MenuActions` if no actions are passed to an `actionGroups` item inside `Page` ([#2266](https://github.com/Shopify/polaris-react/pull/2266))
- Fixed `PositionedOverlay` incorrectly calculating `Topbar.UserMenu` `Popover` width ([#1692](https://github.com/Shopify/polaris-react/pull/1692))
- Fixed `recolor-icon` Sass mixin to properly scope `$secondary-color` to the child `svg` ([#2298](https://github.com/Shopify/polaris-react/pull/2298))
- Fixed a regression with the positioning of the `Popover` component ([#2305](https://github.com/Shopify/polaris-react/pull/2305))
- Fixed Stack Item proportion when shrinking ([#2319](https://github.com/Shopify/polaris-react/pull/2319))
- Fixed `RangeSlider` focus state style issues ([#1926](https://github.com/Shopify/polaris-react/pull/1926))
- Ensure passing `{key: undefined}` into i18n will throw a runtime error in the same way as not passing in the key at all (this was ensured through type-checking at the TypeScript level but people could force through with casting to `any`) ([#2598](https://github.com/Shopify/polaris-react/pull/2598))
- Ensure the normalizedValue within `TextField` is a string (this was already ensured through type-checking at the TypeScript level, but people could force through with casting to `any`, which caused problems) ([#2598](https://github.com/Shopify/polaris-react/pull/2598))

- Fixed an issue with the `Filters` component where the `aria-expanded` attribute was `undefined` on mount ([#2589]https://github.com/Shopify/polaris-react/pull/2589)

### Documentation

- Updated `Card` with custom footer actions example to be right-aligned ([#2603](https://github.com/Shopify/polaris-react/pull/2603))

### Development workflow

### Dependency upgrades

### Code quality

- Converted `Layout` into a functional component ([#2538](https://github.com/Shopify/polaris-react/pull/2538))
- Converted `FormLayout` into a functional component ([#2539](https://github.com/Shopify/polaris-react/pull/2539))
- Converted `Stack` into a functional component ([#2534](https://github.com/Shopify/polaris-react/pull/2534))
- Converted `BulkActionButton` into a functional component ([#2542](https://github.com/Shopify/polaris-react/pull/2542))
- Converted `Focus` into a functional component ([#2540](https://github.com/Shopify/polaris-react/pull/2540))
- Converted `Tooltip` into a functional component ([#2543](https://github.com/Shopify/polaris-react/pull/2543))
- Converted `Option` into a functional component ([#2541](https://github.com/Shopify/polaris-react/pull/2541))
- Avoided unneeded work in `TextField` if character count is not rendered ([#2598](https://github.com/Shopify/polaris-react/pull/2598))

### Deprecations
