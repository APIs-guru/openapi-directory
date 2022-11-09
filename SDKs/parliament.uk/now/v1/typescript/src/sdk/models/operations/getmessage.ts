import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMessageAnnunciatorEnum {
    CommonsMain = "CommonsMain"
,    LordsMain = "LordsMain"
,    Security = "Security"
}


export class GetMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=annunciator" })
  annunciator: GetMessageAnnunciatorEnum;
}


export class GetMessageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMessagePathParams;
}


export class GetMessageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  messageViewModel?: shared.MessageViewModel;

  @Metadata()
  statusCode: number;
}
