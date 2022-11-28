import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TagApiGetCategoryNamesListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}


export class TagApiGetCategoryNamesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: TagApiGetCategoryNamesListNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class TagApiGetCategoryNamesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TagApiGetCategoryNamesListQueryParams;
}


export class TagApiGetCategoryNamesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagApiGetCategoryNamesList200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  tagApiGetCategoryNamesList200ApplicationJsonpStrings?: string[];

  @SpeakeasyMetadata()
  tagApiGetCategoryNamesList200TextJsonStrings?: string[];
}
