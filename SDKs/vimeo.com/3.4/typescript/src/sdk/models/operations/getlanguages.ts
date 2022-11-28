import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetLanguagesFilterEnum {
    Texttracks = "texttracks"
}


export class GetLanguagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetLanguagesFilterEnum;
}


export class GetLanguagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLanguagesQueryParams;
}


export class GetLanguagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Language })
  languages?: shared.Language[];
}
