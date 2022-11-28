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
var GetMyOrdersSellingByUuidUuidPathParams = /** @class */ (function (_super) {
    __extends(GetMyOrdersSellingByUuidUuidPathParams, _super);
    function GetMyOrdersSellingByUuidUuidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" }),
        __metadata("design:type", String)
    ], GetMyOrdersSellingByUuidUuidPathParams.prototype, "uuid", void 0);
    return GetMyOrdersSellingByUuidUuidPathParams;
}(SpeakeasyBase));
export { GetMyOrdersSellingByUuidUuidPathParams };
var GetMyOrdersSellingByUuidUuidRequest = /** @class */ (function (_super) {
    __extends(GetMyOrdersSellingByUuidUuidRequest, _super);
    function GetMyOrdersSellingByUuidUuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMyOrdersSellingByUuidUuidPathParams)
    ], GetMyOrdersSellingByUuidUuidRequest.prototype, "pathParams", void 0);
    return GetMyOrdersSellingByUuidUuidRequest;
}(SpeakeasyBase));
export { GetMyOrdersSellingByUuidUuidRequest };
var GetMyOrdersSellingByUuidUuidResponse = /** @class */ (function (_super) {
    __extends(GetMyOrdersSellingByUuidUuidResponse, _super);
    function GetMyOrdersSellingByUuidUuidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMyOrdersSellingByUuidUuidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMyOrdersSellingByUuidUuidResponse.prototype, "statusCode", void 0);
    return GetMyOrdersSellingByUuidUuidResponse;
}(SpeakeasyBase));
export { GetMyOrdersSellingByUuidUuidResponse };
