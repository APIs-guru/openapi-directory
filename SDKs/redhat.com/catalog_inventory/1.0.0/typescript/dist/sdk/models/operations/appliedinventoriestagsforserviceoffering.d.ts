import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppliedInventoriesTagsForServiceOfferingPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppliedInventoriesTagsForServiceOfferingRequest extends SpeakeasyBase {
    pathParams: AppliedInventoriesTagsForServiceOfferingPathParams;
    request: shared.AppliedInventoriesParametersServicePlan;
}
export declare class AppliedInventoriesTagsForServiceOfferingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tags?: shared.Tag[];
}
