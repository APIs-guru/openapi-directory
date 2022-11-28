import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppliedInventoriesTagsForServiceOfferingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AppliedInventoriesTagsForServiceOfferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppliedInventoriesTagsForServiceOfferingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AppliedInventoriesParametersServicePlan;
}


export class AppliedInventoriesTagsForServiceOfferingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Tag })
  tags?: shared.Tag[];
}
