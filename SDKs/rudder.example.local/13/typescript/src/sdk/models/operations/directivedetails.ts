import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DirectiveDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directiveId" })
  directiveId: string;
}

export enum DirectiveDetails200ApplicationJsonActionEnum {
    DirectiveDetails = "directiveDetails"
}


export class DirectiveDetails200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive })
  directives: shared.Directive[];
}

export enum DirectiveDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class DirectiveDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: DirectiveDetails200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: DirectiveDetails200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: DirectiveDetails200ApplicationJsonResultEnum;
}


export class DirectiveDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DirectiveDetailsPathParams;
}


export class DirectiveDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  directiveDetails200ApplicationJsonObject?: DirectiveDetails200ApplicationJson;
}
