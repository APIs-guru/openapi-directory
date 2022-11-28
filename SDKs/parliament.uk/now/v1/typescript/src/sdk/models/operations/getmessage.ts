import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMessageAnnunciatorEnum {
    CommonsMain = "CommonsMain",
    LordsMain = "LordsMain",
    Security = "Security"
}


export class GetMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annunciator" })
  annunciator: GetMessageAnnunciatorEnum;
}


export class GetMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMessagePathParams;
}


export class GetMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageViewModel?: shared.MessageViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
