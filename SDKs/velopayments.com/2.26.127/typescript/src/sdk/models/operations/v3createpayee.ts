import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class V3CreatePayeeMultipartFormData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=file;json=true", elemType: shared.CreatePayeesCsvRequest })
  file?: shared.CreatePayeesCsvRequest[];

  @Metadata({ data: "multipart_form, name=payorId" })
  payorId?: string;
}


export class V3CreatePayeeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  createPayeesRequest?: shared.CreatePayeesRequest;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  object?: V3CreatePayeeMultipartFormData;
}


export class V3CreatePayeeRequest extends SpeakeasyBase {
  @Metadata()
  request?: V3CreatePayeeRequests;
}


export class V3CreatePayeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPayeesCsvResponse?: shared.CreatePayeesCsvResponse;

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
