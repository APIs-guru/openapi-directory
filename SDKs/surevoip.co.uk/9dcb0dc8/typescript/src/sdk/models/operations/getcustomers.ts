import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCustomers302ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;
}


export class GetCustomersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCustomers302ApplicationJsonObject?: GetCustomers302ApplicationJson;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
