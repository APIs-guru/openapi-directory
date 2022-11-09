import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WithdrawPayoutV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}


export class WithdrawPayoutV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: WithdrawPayoutV3PathParams;
}


export class WithdrawPayoutV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
