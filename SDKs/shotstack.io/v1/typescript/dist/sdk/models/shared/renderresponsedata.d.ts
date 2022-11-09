import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Edit } from "./edit";
export declare enum RenderResponseDataStatusEnum {
    Queued = "queued",
    Fetching = "fetching",
    Rendering = "rendering",
    Saving = "saving",
    Done = "done",
    Failed = "failed"
}
/**
 * The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
**/
export declare class RenderResponseData extends SpeakeasyBase {
    created: string;
    data: Edit;
    duration?: number;
    error?: string;
    id: string;
    owner: string;
    plan?: string;
    poster?: string;
    renderTime?: number;
    status: RenderResponseDataStatusEnum;
    thumbnail?: string;
    updated: string;
    url?: string;
}
