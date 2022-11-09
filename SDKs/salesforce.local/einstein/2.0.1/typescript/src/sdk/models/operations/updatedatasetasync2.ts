import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDatasetAsync2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class UpdateDatasetAsync2RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=data" })
  data?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;
}


export class UpdateDatasetAsync2Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class UpdateDatasetAsync2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDatasetAsync2PathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UpdateDatasetAsync2RequestBody;

  @Metadata()
  security: UpdateDatasetAsync2Security;
}


export class UpdateDatasetAsync2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataset?: shared.Dataset;

  @Metadata()
  statusCode: number;
}
