import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagApiPostNewTagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class TagApiPostNewTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TagApiPostNewTagQueryParams;
}


export class TagApiPostNewTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tagBaseContract?: shared.TagBaseContract;
}
