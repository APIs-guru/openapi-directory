import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WithdrawPayoutV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}


export class WithdrawPayoutV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WithdrawPayoutV3PathParams;
}


export class WithdrawPayoutV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
