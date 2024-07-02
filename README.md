# Counter-App
A simple counter app in React, to explore how React works behind the scene

## main hooks used
- memo(): used for component function, will only re-excute if props values change
- useMemo(): used for normal function, will only re-excute if any values in the dependency list change
- useCallback(): used for normal function definition, will only be re-created if any values in the dependency list change

## notes
- key prop
  - could be used to re-mount the component (hoooks initialization will be re-excuted)
  - give components in a list a Unique Identifier
    - if a new component is added to the list, the comparison between old and new snapshots of virtual dom gives better html insertion performance
    - states are binded to components based on keys
