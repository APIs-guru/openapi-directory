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
var GetPayeeByIdV4PathParams = /** @class */ (function (_super) {
    __extends(GetPayeeByIdV4PathParams, _super);
    function GetPayeeByIdV4PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" }),
        __metadata("design:type", String)
    ], GetPayeeByIdV4PathParams.prototype, "payeeId", void 0);
    return GetPayeeByIdV4PathParams;
}(SpeakeasyBase));
export { GetPayeeByIdV4PathParams };
var GetPayeeByIdV4QueryParams = /** @class */ (function (_super) {
    __extends(GetPayeeByIdV4QueryParams, _super);
    function GetPayeeByIdV4QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" }),
        __metadata("design:type", Boolean)
    ], GetPayeeByIdV4QueryParams.prototype, "sensitive", void 0);
    return GetPayeeByIdV4QueryParams;
}(SpeakeasyBase));
export { GetPayeeByIdV4QueryParams };
var GetPayeeByIdV4Request = /** @class */ (function (_super) {
    __extends(GetPayeeByIdV4Request, _super);
    function GetPayeeByIdV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayeeByIdV4PathParams)
    ], GetPayeeByIdV4Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPayeeByIdV4QueryParams)
    ], GetPayeeByIdV4Request.prototype, "queryParams", void 0);
    return GetPayeeByIdV4Request;
}(SpeakeasyBase));
export { GetPayeeByIdV4Request };
var GetPayeeByIdV4Response = /** @class */ (function (_super) {
    __extends(GetPayeeByIdV4Response, _super);
    function GetPayeeByIdV4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPayeeByIdV4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayeeDetailResponse2)
    ], GetPayeeByIdV4Response.prototype, "payeeDetailResponse2", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPayeeByIdV4Response.prototype, "statusCode", void 0);
    return GetPayeeByIdV4Response;
}(SpeakeasyBase));
export { GetPayeeByIdV4Response };
