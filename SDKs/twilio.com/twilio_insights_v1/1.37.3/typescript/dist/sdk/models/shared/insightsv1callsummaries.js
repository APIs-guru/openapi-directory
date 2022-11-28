var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallSummariesEnumAnsweredByEnum } from "./callsummariesenumansweredbyenum";
import { CallSummariesEnumCallStateEnum } from "./callsummariesenumcallstateenum";
import { CallSummariesEnumCallTypeEnum } from "./callsummariesenumcalltypeenum";
import { CallSummariesEnumProcessingStateEnum } from "./callsummariesenumprocessingstateenum";
var InsightsV1CallSummaries = /** @class */ (function (_super) {
    __extends(InsightsV1CallSummaries, _super);
    function InsightsV1CallSummaries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], InsightsV1CallSummaries.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answered_by" }),
        __metadata("design:type", String)
    ], InsightsV1CallSummaries.prototype, "answeredBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Object)
    ], InsightsV1CallSummaries.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_sid" }),
        __metadata("design:type", String)
    ], InsightsV1CallSummaries.prototype, "callSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_state" }),
        __metadata("design:type", String)
    ], InsightsV1CallSummaries.prototype, "callState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=call_type" }),
        __metadata("design:type", String)
    ], InsightsV1CallSummaries.prototype, "callType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrier_edge" }),
        __metadata("design:type", Object)
    ], InsightsV1CallSummaries.prototype, "carrierEdge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_edge" }),
        __metadata("design:type", Object)
    ], InsightsV1CallSummaries.prototype, "clientEdge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connect_duration" }),
        __metadata("design:type", Number)
    ], InsightsV1CallSummaries.prototype, "connectDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", Date)
    ], InsightsV1CallSummaries.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], InsightsV1CallSummaries.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_time" }),
        __metadata("design:type", Date)
    ], InsightsV1CallSummaries.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", Object)
    ], InsightsV1CallSummaries.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processing_state" }),
        __metadata("design:type", String)
    ], InsightsV1CallSummaries.prototype, "processingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Object)
    ], InsightsV1CallSummaries.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sdk_edge" }),
        __metadata("design:type", Object)
    ], InsightsV1CallSummaries.prototype, "sdkEdge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sip_edge" }),
        __metadata("design:type", Object)
    ], InsightsV1CallSummaries.prototype, "sipEdge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_time" }),
        __metadata("design:type", Date)
    ], InsightsV1CallSummaries.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], InsightsV1CallSummaries.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", Object)
    ], InsightsV1CallSummaries.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trust" }),
        __metadata("design:type", Object)
    ], InsightsV1CallSummaries.prototype, "trust", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], InsightsV1CallSummaries.prototype, "url", void 0);
    return InsightsV1CallSummaries;
}(SpeakeasyBase));
export { InsightsV1CallSummaries };
