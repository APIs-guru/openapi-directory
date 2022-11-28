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
var GetV1ContinuousChecksContinuousCheckIdHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetV1ContinuousChecksContinuousCheckIdHistoryPathParams, _super);
    function GetV1ContinuousChecksContinuousCheckIdHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=continuous_check_id" }),
        __metadata("design:type", String)
    ], GetV1ContinuousChecksContinuousCheckIdHistoryPathParams.prototype, "continuousCheckId", void 0);
    return GetV1ContinuousChecksContinuousCheckIdHistoryPathParams;
}(SpeakeasyBase));
export { GetV1ContinuousChecksContinuousCheckIdHistoryPathParams };
var GetV1ContinuousChecksContinuousCheckIdHistorySecurity = /** @class */ (function (_super) {
    __extends(GetV1ContinuousChecksContinuousCheckIdHistorySecurity, _super);
    function GetV1ContinuousChecksContinuousCheckIdHistorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetV1ContinuousChecksContinuousCheckIdHistorySecurity.prototype, "apiKey", void 0);
    return GetV1ContinuousChecksContinuousCheckIdHistorySecurity;
}(SpeakeasyBase));
export { GetV1ContinuousChecksContinuousCheckIdHistorySecurity };
var GetV1ContinuousChecksContinuousCheckIdHistoryRequest = /** @class */ (function (_super) {
    __extends(GetV1ContinuousChecksContinuousCheckIdHistoryRequest, _super);
    function GetV1ContinuousChecksContinuousCheckIdHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1ContinuousChecksContinuousCheckIdHistoryPathParams)
    ], GetV1ContinuousChecksContinuousCheckIdHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1ContinuousChecksContinuousCheckIdHistorySecurity)
    ], GetV1ContinuousChecksContinuousCheckIdHistoryRequest.prototype, "security", void 0);
    return GetV1ContinuousChecksContinuousCheckIdHistoryRequest;
}(SpeakeasyBase));
export { GetV1ContinuousChecksContinuousCheckIdHistoryRequest };
var GetV1ContinuousChecksContinuousCheckIdHistoryResponse = /** @class */ (function (_super) {
    __extends(GetV1ContinuousChecksContinuousCheckIdHistoryResponse, _super);
    function GetV1ContinuousChecksContinuousCheckIdHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV1ContinuousChecksContinuousCheckIdHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetContiuousCheckHistoryOutput)
    ], GetV1ContinuousChecksContinuousCheckIdHistoryResponse.prototype, "getContiuousCheckHistoryOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV1ContinuousChecksContinuousCheckIdHistoryResponse.prototype, "statusCode", void 0);
    return GetV1ContinuousChecksContinuousCheckIdHistoryResponse;
}(SpeakeasyBase));
export { GetV1ContinuousChecksContinuousCheckIdHistoryResponse };
