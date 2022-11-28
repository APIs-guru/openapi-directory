import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateNodesQueryParams extends SpeakeasyBase {
    nodeParameters?: shared.NodeAdd[];
}
export declare enum CreateNodes200ApplicationJsonActionEnum {
    CreateNodes = "createNodes"
}
export declare class CreateNodes200ApplicationJsonData extends SpeakeasyBase {
    created: string[];
    failed: string[];
}
export declare enum CreateNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateNodes200ApplicationJson extends SpeakeasyBase {
    action: CreateNodes200ApplicationJsonActionEnum;
    data: CreateNodes200ApplicationJsonData;
    result: CreateNodes200ApplicationJsonResultEnum;
}
export declare class CreateNodesRequest extends SpeakeasyBase {
    queryParams: CreateNodesQueryParams;
}
export declare class CreateNodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNodes200ApplicationJsonObject?: CreateNodes200ApplicationJson;
}
