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
export var ExportTransactionsCsvv4IncludeEnum;
(function (ExportTransactionsCsvv4IncludeEnum) {
    ExportTransactionsCsvv4IncludeEnum["PayorOnly"] = "payorOnly";
    ExportTransactionsCsvv4IncludeEnum["PayorAndDescendants"] = "payorAndDescendants";
})(ExportTransactionsCsvv4IncludeEnum || (ExportTransactionsCsvv4IncludeEnum = {}));
var ExportTransactionsCsvv4QueryParams = /** @class */ (function (_super) {
    __extends(ExportTransactionsCsvv4QueryParams, _super);
    function ExportTransactionsCsvv4QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], ExportTransactionsCsvv4QueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", String)
    ], ExportTransactionsCsvv4QueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" }),
        __metadata("design:type", String)
    ], ExportTransactionsCsvv4QueryParams.prototype, "payorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], ExportTransactionsCsvv4QueryParams.prototype, "startDate", void 0);
    return ExportTransactionsCsvv4QueryParams;
}(SpeakeasyBase));
export { ExportTransactionsCsvv4QueryParams };
var ExportTransactionsCsvv4Request = /** @class */ (function (_super) {
    __extends(ExportTransactionsCsvv4Request, _super);
    function ExportTransactionsCsvv4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExportTransactionsCsvv4QueryParams)
    ], ExportTransactionsCsvv4Request.prototype, "queryParams", void 0);
    return ExportTransactionsCsvv4Request;
}(SpeakeasyBase));
export { ExportTransactionsCsvv4Request };
var ExportTransactionsCsvv4Response = /** @class */ (function (_super) {
    __extends(ExportTransactionsCsvv4Response, _super);
    function ExportTransactionsCsvv4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ExportTransactionsCsvv4Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExportTransactionsCsvv4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExportTransactionsCsvv4Response.prototype, "statusCode", void 0);
    return ExportTransactionsCsvv4Response;
}(SpeakeasyBase));
export { ExportTransactionsCsvv4Response };
