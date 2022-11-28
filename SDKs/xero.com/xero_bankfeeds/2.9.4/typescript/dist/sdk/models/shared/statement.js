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
import { EndBalance } from "./endbalance";
import { Error } from "./error";
import { StartBalance } from "./startbalance";
import { StatementLine } from "./statementline";
var Statement = /** @class */ (function (_super) {
    __extends(Statement, _super);
    function Statement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endBalance" }),
        __metadata("design:type", EndBalance)
    ], Statement.prototype, "endBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], Statement.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: Error }),
        __metadata("design:type", Array)
    ], Statement.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feedConnectionId" }),
        __metadata("design:type", String)
    ], Statement.prototype, "feedConnectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Statement.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startBalance" }),
        __metadata("design:type", StartBalance)
    ], Statement.prototype, "startBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], Statement.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statementLineCount" }),
        __metadata("design:type", Number)
    ], Statement.prototype, "statementLineCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statementLines", elemType: StatementLine }),
        __metadata("design:type", Array)
    ], Statement.prototype, "statementLines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], Statement.prototype, "status", void 0);
    return Statement;
}(SpeakeasyBase));
export { Statement };
