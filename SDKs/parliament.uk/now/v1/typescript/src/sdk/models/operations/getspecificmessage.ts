import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSpecificMessageAnnunciatorEnum {
    CommonsMain = "CommonsMain",
    LordsMain = "LordsMain",
    Security = "Security"
}


export class GetSpecificMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annunciator" })
  annunciator: GetSpecificMessageAnnunciatorEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: Date;
}


export class GetSpecificMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpecificMessagePathParams;
}


export class GetSpecificMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageViewModel?: shared.MessageViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
