import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata about the application
**/
export declare class Application extends SpeakeasyBase {
    applicationId: string;
    applicationUrl: string;
    createdAt: Date;
    logoUrl: string;
    name: string;
    reasonForAccess: string;
}
