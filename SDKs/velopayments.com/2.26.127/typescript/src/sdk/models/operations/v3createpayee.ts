import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class V3CreatePayeeMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file;json=true", elemType: shared.CreatePayeesCsvRequest })
  file?: shared.CreatePayeesCsvRequest[];

  @SpeakeasyMetadata({ data: "multipart_form, name=payorId" })
  payorId?: string;
}


export class V3CreatePayeeRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createPayeesRequest?: shared.CreatePayeesRequestInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object?: V3CreatePayeeMultipartFormData;
}


export class V3CreatePayeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: V3CreatePayeeRequestsInput;
}


export class V3CreatePayeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPayeesCsvResponse?: shared.CreatePayeesCsvResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
