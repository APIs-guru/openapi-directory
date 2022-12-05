import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateInvestorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investor_id" })
  investorId: string;
}


export class UpdateInvestorHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class UpdateInvestorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class UpdateInvestorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateInvestorPathParams;

  @SpeakeasyMetadata()
  headers: UpdateInvestorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: UpdateInvestorSecurity;
}


export class UpdateInvestorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rootTypeForInvestor?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateInvestor400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateInvestor401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateInvestor403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateInvestor404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateInvestor409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateInvestor429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  updateInvestor500ApplicationJsonAny?: any;
}
