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
var GetApiWrittenstatementsStatementsDateUinPathParams = /** @class */ (function (_super) {
    __extends(GetApiWrittenstatementsStatementsDateUinPathParams, _super);
    function GetApiWrittenstatementsStatementsDateUinPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", Date)
    ], GetApiWrittenstatementsStatementsDateUinPathParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uin" }),
        __metadata("design:type", String)
    ], GetApiWrittenstatementsStatementsDateUinPathParams.prototype, "uin", void 0);
    return GetApiWrittenstatementsStatementsDateUinPathParams;
}(SpeakeasyBase));
export { GetApiWrittenstatementsStatementsDateUinPathParams };
var GetApiWrittenstatementsStatementsDateUinQueryParams = /** @class */ (function (_super) {
    __extends(GetApiWrittenstatementsStatementsDateUinQueryParams, _super);
    function GetApiWrittenstatementsStatementsDateUinQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" }),
        __metadata("design:type", Boolean)
    ], GetApiWrittenstatementsStatementsDateUinQueryParams.prototype, "expandMember", void 0);
    return GetApiWrittenstatementsStatementsDateUinQueryParams;
}(SpeakeasyBase));
export { GetApiWrittenstatementsStatementsDateUinQueryParams };
var GetApiWrittenstatementsStatementsDateUinRequest = /** @class */ (function (_super) {
    __extends(GetApiWrittenstatementsStatementsDateUinRequest, _super);
    function GetApiWrittenstatementsStatementsDateUinRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiWrittenstatementsStatementsDateUinPathParams)
    ], GetApiWrittenstatementsStatementsDateUinRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiWrittenstatementsStatementsDateUinQueryParams)
    ], GetApiWrittenstatementsStatementsDateUinRequest.prototype, "queryParams", void 0);
    return GetApiWrittenstatementsStatementsDateUinRequest;
}(SpeakeasyBase));
export { GetApiWrittenstatementsStatementsDateUinRequest };
var GetApiWrittenstatementsStatementsDateUinResponse = /** @class */ (function (_super) {
    __extends(GetApiWrittenstatementsStatementsDateUinResponse, _super);
    function GetApiWrittenstatementsStatementsDateUinResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiWrittenstatementsStatementsDateUinResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiWrittenstatementsStatementsDateUinResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiWrittenstatementsStatementsDateUinResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StatementsViewModelItem)
    ], GetApiWrittenstatementsStatementsDateUinResponse.prototype, "statementsViewModelItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiWrittenstatementsStatementsDateUinResponse.prototype, "statusCode", void 0);
    return GetApiWrittenstatementsStatementsDateUinResponse;
}(SpeakeasyBase));
export { GetApiWrittenstatementsStatementsDateUinResponse };
