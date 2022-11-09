import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class V4CreatePayeeMultipartFormData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=file;json=true", elemType: shared.CreatePayeesCsvRequest2 })
  file?: shared.CreatePayeesCsvRequest2[];

  @Metadata({ data: "multipart_form, name=payorId" })
  payorId?: string;
}


export class V4CreatePayeeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  createPayeesRequest2?: shared.CreatePayeesRequest2;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  object?: V4CreatePayeeMultipartFormData;
}


export class V4CreatePayeeRequest extends SpeakeasyBase {
  @Metadata()
  request?: V4CreatePayeeRequests;
}


export class V4CreatePayeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPayeesCsvResponse2?: shared.CreatePayeesCsvResponse2;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
