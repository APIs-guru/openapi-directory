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
var DeletePayeeByIdV4PathParams = /** @class */ (function (_super) {
    __extends(DeletePayeeByIdV4PathParams, _super);
    function DeletePayeeByIdV4PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" }),
        __metadata("design:type", String)
    ], DeletePayeeByIdV4PathParams.prototype, "payeeId", void 0);
    return DeletePayeeByIdV4PathParams;
}(SpeakeasyBase));
export { DeletePayeeByIdV4PathParams };
var DeletePayeeByIdV4Request = /** @class */ (function (_super) {
    __extends(DeletePayeeByIdV4Request, _super);
    function DeletePayeeByIdV4Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletePayeeByIdV4PathParams)
    ], DeletePayeeByIdV4Request.prototype, "pathParams", void 0);
    return DeletePayeeByIdV4Request;
}(SpeakeasyBase));
export { DeletePayeeByIdV4Request };
var DeletePayeeByIdV4Response = /** @class */ (function (_super) {
    __extends(DeletePayeeByIdV4Response, _super);
    function DeletePayeeByIdV4Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletePayeeByIdV4Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletePayeeByIdV4Response.prototype, "statusCode", void 0);
    return DeletePayeeByIdV4Response;
}(SpeakeasyBase));
export { DeletePayeeByIdV4Response };
