import { SpeakeasyBase } from "../../../internal/utils";
export declare class CategoryResourceAttributes extends SpeakeasyBase {
    name: string;
}
export declare class CategoryResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class CategoryResourceRelationshipsChildrenData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class CategoryResourceRelationshipsChildrenLinks extends SpeakeasyBase {
    related: string;
}
export declare class CategoryResourceRelationshipsChildren extends SpeakeasyBase {
    data: CategoryResourceRelationshipsChildrenData[];
    links?: CategoryResourceRelationshipsChildrenLinks;
}
export declare class CategoryResourceRelationshipsParentData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class CategoryResourceRelationshipsParentLinks extends SpeakeasyBase {
    related: string;
}
export declare class CategoryResourceRelationshipsParent extends SpeakeasyBase {
    data: CategoryResourceRelationshipsParentData;
    links?: CategoryResourceRelationshipsParentLinks;
}
export declare class CategoryResourceRelationships extends SpeakeasyBase {
    children: CategoryResourceRelationshipsChildren;
    parent: CategoryResourceRelationshipsParent;
}
/**
 * Provides information about a category and its ancestry.
 *
**/
export declare class CategoryResource extends SpeakeasyBase {
    attributes: CategoryResourceAttributes;
    id: string;
    links?: CategoryResourceLinks;
    relationships: CategoryResourceRelationships;
    type: string;
}
