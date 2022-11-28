import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServerResponse extends SpeakeasyBase {
    contentType: string;
    server?: shared.Server;
    statusCode: number;
}
