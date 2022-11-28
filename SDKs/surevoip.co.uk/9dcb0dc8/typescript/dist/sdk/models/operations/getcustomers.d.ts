import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCustomers302ApplicationJson extends SpeakeasyBase {
    location?: string;
}
export declare class GetCustomersResponse extends SpeakeasyBase {
    contentType: string;
    getCustomers302ApplicationJsonObject?: GetCustomers302ApplicationJson;
    headers: Map<string, string[]>;
    statusCode: number;
}
