import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePayorLinksSecurity extends SpeakeasyBase {
    oAuthVeloBackOffice: shared.SchemeOAuthVeloBackOffice;
}
export declare class CreatePayorLinksRequest extends SpeakeasyBase {
    request: shared.CreatePayorLinkRequest;
    security: CreatePayorLinksSecurity;
}
export declare class CreatePayorLinksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
