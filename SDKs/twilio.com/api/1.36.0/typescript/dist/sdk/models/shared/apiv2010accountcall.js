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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CallEnumStatusEnum } from "./callenumstatusenum";
var ApiV2010AccountCall = /** @class */ (function (_super) {
    __extends(ApiV2010AccountCall, _super);
    function ApiV2010AccountCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=answered_by" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "answeredBy", void 0);
    __decorate([
        Metadata({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=caller_name" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "callerName", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "direction", void 0);
    __decorate([
        Metadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "json, name=end_time" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=forwarded_from" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "forwardedFrom", void 0);
    __decorate([
        Metadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "from", void 0);
    __decorate([
        Metadata({ data: "json, name=from_formatted" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "fromFormatted", void 0);
    __decorate([
        Metadata({ data: "json, name=group_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "groupSid", void 0);
    __decorate([
        Metadata({ data: "json, name=parent_call_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "parentCallSid", void 0);
    __decorate([
        Metadata({ data: "json, name=phone_number_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "phoneNumberSid", void 0);
    __decorate([
        Metadata({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "price", void 0);
    __decorate([
        Metadata({ data: "json, name=price_unit" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "priceUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=queue_time" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "queueTime", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=subresource_uris" }),
        __metadata("design:type", Map)
    ], ApiV2010AccountCall.prototype, "subresourceUris", void 0);
    __decorate([
        Metadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "to", void 0);
    __decorate([
        Metadata({ data: "json, name=to_formatted" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "toFormatted", void 0);
    __decorate([
        Metadata({ data: "json, name=trunk_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "trunkSid", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ApiV2010AccountCall.prototype, "uri", void 0);
    return ApiV2010AccountCall;
}(SpeakeasyBase));
export { ApiV2010AccountCall };
