import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorNotFoundErrors extends SpeakeasyBase {
    detail?: string;
    status?: string;
}
export declare class ErrorNotFound extends SpeakeasyBase {
    errors?: ErrorNotFoundErrors[];
}
