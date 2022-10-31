package shared

type NodeInheritedPropertiesPropertiesHierarchyKindEnum string

const (
	NodeInheritedPropertiesPropertiesHierarchyKindEnumGlobal NodeInheritedPropertiesPropertiesHierarchyKindEnum = "global"
	NodeInheritedPropertiesPropertiesHierarchyKindEnumGroup  NodeInheritedPropertiesPropertiesHierarchyKindEnum = "group"
)

type NodeInheritedPropertiesPropertiesHierarchy struct {
	ID    *string                                            `json:"id,omitempty"`
	Kind  NodeInheritedPropertiesPropertiesHierarchyKindEnum `json:"kind"`
	Name  *string                                            `json:"name,omitempty"`
	Value string                                             `json:"value"`
}

type NodeInheritedPropertiesPropertiesProviderEnum string

const (
	NodeInheritedPropertiesPropertiesProviderEnumInherited                 NodeInheritedPropertiesPropertiesProviderEnum = "inherited"
	NodeInheritedPropertiesPropertiesProviderEnumOverridden                NodeInheritedPropertiesPropertiesProviderEnum = "overridden"
	NodeInheritedPropertiesPropertiesProviderEnumPluginNameLikeDatasources NodeInheritedPropertiesPropertiesProviderEnum = "plugin name like datasources"
)

type NodeInheritedPropertiesProperties struct {
	Hierarchy []NodeInheritedPropertiesPropertiesHierarchy   `json:"hierarchy,omitempty"`
	Name      string                                         `json:"name"`
	Origval   *interface{}                                   `json:"origval,omitempty"`
	Provider  *NodeInheritedPropertiesPropertiesProviderEnum `json:"provider,omitempty"`
	Value     interface{}                                    `json:"value"`
}

type NodeInheritedProperties struct {
	ID         string                              `json:"id"`
	Properties []NodeInheritedPropertiesProperties `json:"properties"`
}
