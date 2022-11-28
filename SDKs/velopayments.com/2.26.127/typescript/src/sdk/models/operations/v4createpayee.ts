import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class V4CreatePayeeMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file;json=true", elemType: shared.CreatePayeesCsvRequest2 })
  file?: shared.CreatePayeesCsvRequest2[];

  @SpeakeasyMetadata({ data: "multipart_form, name=payorId" })
  payorId?: string;
}


export class V4CreatePayeeRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createPayeesRequest2?: shared.CreatePayeesRequest2Input;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object?: V4CreatePayeeMultipartFormData;
}


export class V4CreatePayeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: V4CreatePayeeRequestsInput;
}


export class V4CreatePayeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPayeesCsvResponse2?: shared.CreatePayeesCsvResponse2;

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
