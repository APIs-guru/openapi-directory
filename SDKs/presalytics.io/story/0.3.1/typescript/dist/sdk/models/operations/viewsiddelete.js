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
var ViewsIdDeletePathParams = /** @class */ (function (_super) {
    __extends(ViewsIdDeletePathParams, _super);
    function ViewsIdDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=view_id" }),
        __metadata("design:type", String)
    ], ViewsIdDeletePathParams.prototype, "viewId", void 0);
    return ViewsIdDeletePathParams;
}(SpeakeasyBase));
export { ViewsIdDeletePathParams };
var ViewsIdDeleteRequest = /** @class */ (function (_super) {
    __extends(ViewsIdDeleteRequest, _super);
    function ViewsIdDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ViewsIdDeletePathParams)
    ], ViewsIdDeleteRequest.prototype, "pathParams", void 0);
    return ViewsIdDeleteRequest;
}(SpeakeasyBase));
export { ViewsIdDeleteRequest };
var ViewsIdDeleteResponse = /** @class */ (function (_super) {
    __extends(ViewsIdDeleteResponse, _super);
    function ViewsIdDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ViewsIdDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ViewsIdDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ViewsIdDeleteResponse.prototype, "problemDetail", void 0);
    return ViewsIdDeleteResponse;
}(SpeakeasyBase));
export { ViewsIdDeleteResponse };
