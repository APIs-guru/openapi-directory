import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses extends SpeakeasyBase {
  @Metadata({ data: "json, name=absoluteUrl" })
  absoluteUrl?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=cookies" })
  cookies?: Map<string, any>;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetAdminRequestsUnmatchedNearMisses200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=nearMisses", elemType: operations.GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses })
  nearMisses?: GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses[];
}


export class GetAdminRequestsUnmatchedNearMissesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAdminRequestsUnmatchedNearMisses200ApplicationJsonObject?: GetAdminRequestsUnmatchedNearMisses200ApplicationJson;

  @Metadata()
  statusCode: number;
}
