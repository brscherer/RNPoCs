# FlatList

Uses virtualization to optimize rendering by rendering only the items currently visible, with a buffer at the top and bottom to support smooth scrolling.

Introduces overhead since mounting and unmounting components consume device resources

# FlashList

Uses cell recycling strategy keeping a fixed poool of components instances in memory. When item scrolls out of view, it reuses the same component with new data instead of unmounting and mounting again.

Improves performance specially when list is complex, like when it have animations, auto-scrolling, custom filters or sorting rules.