import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCustomers302ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}


export class GetCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCustomers302ApplicationJsonObject?: GetCustomers302ApplicationJson;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
