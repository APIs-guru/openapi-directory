import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CategoryResourceAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CategoryResourceLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self: string;
}


export class CategoryResourceRelationshipsChildrenData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class CategoryResourceRelationshipsChildrenLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class CategoryResourceRelationshipsChildren extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.CategoryResourceRelationshipsChildrenData })
  data: CategoryResourceRelationshipsChildrenData[];

  @Metadata({ data: "json, name=links" })
  links?: CategoryResourceRelationshipsChildrenLinks;
}


export class CategoryResourceRelationshipsParentData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class CategoryResourceRelationshipsParentLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class CategoryResourceRelationshipsParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: CategoryResourceRelationshipsParentData;

  @Metadata({ data: "json, name=links" })
  links?: CategoryResourceRelationshipsParentLinks;
}


export class CategoryResourceRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=children" })
  children: CategoryResourceRelationshipsChildren;

  @Metadata({ data: "json, name=parent" })
  parent: CategoryResourceRelationshipsParent;
}


// CategoryResource
/** 
 * Provides information about a category and its ancestry.
 * 
**/
export class CategoryResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: CategoryResourceAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links?: CategoryResourceLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: CategoryResourceRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}
