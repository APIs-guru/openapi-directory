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
import * as shared from "../shared";
var PicoChargingHistoryGetPathParams = /** @class */ (function (_super) {
    __extends(PicoChargingHistoryGetPathParams, _super);
    function PicoChargingHistoryGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PicoChargingHistoryGetPathParams.prototype, "id", void 0);
    return PicoChargingHistoryGetPathParams;
}(SpeakeasyBase));
export { PicoChargingHistoryGetPathParams };
var PicoChargingHistoryGetRequest = /** @class */ (function (_super) {
    __extends(PicoChargingHistoryGetRequest, _super);
    function PicoChargingHistoryGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PicoChargingHistoryGetPathParams)
    ], PicoChargingHistoryGetRequest.prototype, "pathParams", void 0);
    return PicoChargingHistoryGetRequest;
}(SpeakeasyBase));
export { PicoChargingHistoryGetRequest };
var PicoChargingHistoryGetResponse = /** @class */ (function (_super) {
    __extends(PicoChargingHistoryGetResponse, _super);
    function PicoChargingHistoryGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PicoChargingHistoryGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PicoChargingHistoryGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PicoChargingHistoryData }),
        __metadata("design:type", Array)
    ], PicoChargingHistoryGetResponse.prototype, "picoChargingHistoryData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PicoChargingHistoryGetResponse.prototype, "statusCode", void 0);
    return PicoChargingHistoryGetResponse;
}(SpeakeasyBase));
export { PicoChargingHistoryGetResponse };
