import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSpecificMessageAnnunciatorEnum {
    CommonsMain = "CommonsMain"
,    LordsMain = "LordsMain"
,    Security = "Security"
}


export class GetSpecificMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=annunciator" })
  annunciator: GetSpecificMessageAnnunciatorEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: Date;
}


export class GetSpecificMessageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecificMessagePathParams;
}


export class GetSpecificMessageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  messageViewModel?: shared.MessageViewModel;

  @Metadata()
  statusCode: number;
}
