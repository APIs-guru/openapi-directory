import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoryResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class CategoryResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


export class CategoryResourceRelationshipsChildrenData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class CategoryResourceRelationshipsChildrenLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class CategoryResourceRelationshipsChildren extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: CategoryResourceRelationshipsChildrenData })
  data: CategoryResourceRelationshipsChildrenData[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CategoryResourceRelationshipsChildrenLinks;
}


export class CategoryResourceRelationshipsParentData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class CategoryResourceRelationshipsParentLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class CategoryResourceRelationshipsParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CategoryResourceRelationshipsParentData;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CategoryResourceRelationshipsParentLinks;
}


export class CategoryResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=children" })
  children: CategoryResourceRelationshipsChildren;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent: CategoryResourceRelationshipsParent;
}


// CategoryResource
/** 
 * Provides information about a category and its ancestry.
 * 
**/
export class CategoryResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: CategoryResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CategoryResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: CategoryResourceRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
