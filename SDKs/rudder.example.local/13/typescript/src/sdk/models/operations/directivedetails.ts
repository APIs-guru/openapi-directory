import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectiveDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=directiveId" })
  directiveId: string;
}


export class DirectiveDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectiveDetailsPathParams;
}

export enum DirectiveDetails200ApplicationJsonActionEnum {
    DirectiveDetails = "directiveDetails"
}


export class DirectiveDetails200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum DirectiveDetails200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class DirectiveDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: DirectiveDetails200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: DirectiveDetails200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: DirectiveDetails200ApplicationJsonResultEnum;
}


export class DirectiveDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  directiveDetails200ApplicationJsonObject?: DirectiveDetails200ApplicationJson;
}
