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
import * as shared from "../shared";
export var FETCHEVENTTYPE_SERVERS = [
    "https://events.twilio.com",
];
var FetchEventTypePathParams = /** @class */ (function (_super) {
    __extends(FetchEventTypePathParams, _super);
    function FetchEventTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Type" }),
        __metadata("design:type", String)
    ], FetchEventTypePathParams.prototype, "type", void 0);
    return FetchEventTypePathParams;
}(SpeakeasyBase));
export { FetchEventTypePathParams };
var FetchEventTypeSecurity = /** @class */ (function (_super) {
    __extends(FetchEventTypeSecurity, _super);
    function FetchEventTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchEventTypeSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchEventTypeSecurity;
}(SpeakeasyBase));
export { FetchEventTypeSecurity };
var FetchEventTypeRequest = /** @class */ (function (_super) {
    __extends(FetchEventTypeRequest, _super);
    function FetchEventTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchEventTypeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchEventTypePathParams)
    ], FetchEventTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchEventTypeSecurity)
    ], FetchEventTypeRequest.prototype, "security", void 0);
    return FetchEventTypeRequest;
}(SpeakeasyBase));
export { FetchEventTypeRequest };
var FetchEventTypeResponse = /** @class */ (function (_super) {
    __extends(FetchEventTypeResponse, _super);
    function FetchEventTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchEventTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchEventTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.EventsV1EventType)
    ], FetchEventTypeResponse.prototype, "eventsV1EventType", void 0);
    return FetchEventTypeResponse;
}(SpeakeasyBase));
export { FetchEventTypeResponse };
