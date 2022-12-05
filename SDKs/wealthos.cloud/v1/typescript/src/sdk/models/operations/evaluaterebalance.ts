import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EvaluateRebalanceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}

export enum EvaluateRebalanceSwitchInstructionRequestTypeEnum {
    Pot = "pot",
    Investor = "investor",
    Portfolio = "portfolio"
}


// EvaluateRebalanceSwitchInstructionRequest
/** 
 * Definition of Switch instruction
**/
export class EvaluateRebalanceSwitchInstructionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: EvaluateRebalanceSwitchInstructionRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}


export class EvaluateRebalanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}

export enum EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum {
    Eligible = "eligible",
    Ineligible = "ineligible",
    NoPortfolioAttached = "no_portfolio_attached",
    NegativeHoldings = "negative_holdings",
    NoHoldings = "no_holdings"
}


// EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest
/** 
 * Each individual pot details on the rebalance request
**/
export class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=investor_id" })
  investorId: string;

  @SpeakeasyMetadata({ data: "json, name=portfolio_deviation" })
  portfolioDeviation?: string;

  @SpeakeasyMetadata({ data: "json, name=portfolio_template_id" })
  portfolioTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=pot_id" })
  potId: string;

  @SpeakeasyMetadata({ data: "json, name=rebalance_eligibility_status" })
  rebalanceEligibilityStatus: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum;
}


// EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot
/** 
 * contains array for pot details
**/
export class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluation_response", elemType: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest })
  evaluationResponse: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest[];
}


export class EvaluateRebalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EvaluateRebalanceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EvaluateRebalanceSwitchInstructionRequest;

  @SpeakeasyMetadata()
  security: EvaluateRebalanceSecurity;
}


export class EvaluateRebalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  evaluateRebalance400ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  evaluateRebalance401ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  evaluateRebalance403ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  evaluateRebalance404ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  evaluateRebalance409ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  evaluateRebalance429ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  evaluateRebalance500ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  thisIsTheReturnObjectWithEvaluationPerPot?: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot;
}
