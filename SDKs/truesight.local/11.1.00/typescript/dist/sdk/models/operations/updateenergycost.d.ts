import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEnergyCostPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class UpdateEnergyCostRequest extends SpeakeasyBase {
    pathParams: UpdateEnergyCostPathParams;
    request?: shared.GroupConfiguration;
}
export declare class UpdateEnergyCostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
