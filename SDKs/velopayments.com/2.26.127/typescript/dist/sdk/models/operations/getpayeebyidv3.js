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
var GetPayeeByIdV3PathParams = /** @class */ (function (_super) {
    __extends(GetPayeeByIdV3PathParams, _super);
    function GetPayeeByIdV3PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" }),
        __metadata("design:type", String)
    ], GetPayeeByIdV3PathParams.prototype, "payeeId", void 0);
    return GetPayeeByIdV3PathParams;
}(SpeakeasyBase));
export { GetPayeeByIdV3PathParams };
var GetPayeeByIdV3QueryParams = /** @class */ (function (_super) {
    __extends(GetPayeeByIdV3QueryParams, _super);
    function GetPayeeByIdV3QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" }),
        __metadata("design:type", Boolean)
    ], GetPayeeByIdV3QueryParams.prototype, "sensitive", void 0);
    return GetPayeeByIdV3QueryParams;
}(SpeakeasyBase));
export { GetPayeeByIdV3QueryParams };
var GetPayeeByIdV3Request = /** @class */ (function (_super) {
    __extends(GetPayeeByIdV3Request, _super);
    function GetPayeeByIdV3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayeeByIdV3PathParams)
    ], GetPayeeByIdV3Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayeeByIdV3QueryParams)
    ], GetPayeeByIdV3Request.prototype, "queryParams", void 0);
    return GetPayeeByIdV3Request;
}(SpeakeasyBase));
export { GetPayeeByIdV3Request };
var GetPayeeByIdV3Response = /** @class */ (function (_super) {
    __extends(GetPayeeByIdV3Response, _super);
    function GetPayeeByIdV3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayeeByIdV3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayeeDetailResponse)
    ], GetPayeeByIdV3Response.prototype, "payeeDetailResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayeeByIdV3Response.prototype, "statusCode", void 0);
    return GetPayeeByIdV3Response;
}(SpeakeasyBase));
export { GetPayeeByIdV3Response };
