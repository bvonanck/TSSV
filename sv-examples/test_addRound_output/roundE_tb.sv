
/* verilator lint_off DECLFILENAME */
/* verilator lint_off UNUSED */

        

        
/* verilator lint_off WIDTH */        
module roundE_tb 
   (
   input logic  clk,
   input logic  rst_b
   );

   logic signed [7:0] in;
   logic signed [8:0] rounded;
   logic [3:0] shift;


logic [15:0] count;
always @(posedge clk or negedge rst_b)
if(!rst_b)
begin
count <= 'd0;
end
else
begin
count <= count + 1'b1;

case(count)
'd0: begin
    in <= 8'd3;
    shift <= 4'd1;
    assert(rounded == 9'd2) else $fatal("Assertion failed: rounded should be 2 at time %0t", $time);
end
'd1: begin
    in <= 8'd22;
    shift <= 4'd2;
    assert(rounded == 9'd6) else $fatal("Assertion failed: rounded should be 6 at time %0t", $time);
end
'd2: begin
    in <= -8'd22; 
    shift <= 4'd2;
    assert(rounded == -9'd6) else $fatal("Assertion failed: rounded should be -6 at time %0t", $time);
end
'd3: begin
    in <= 8'd124;
    shift <= 4'd3;
    assert(rounded == 9'd16) else $fatal("Assertion failed: rounded should be 16 at time %0t", $time);
end
'd4: begin  
    in <= -8'd124; 
    shift <= 4'd3;
    assert(rounded == -9'd16) else $fatal("Assertion failed: rounded should be -16 at time %0t", $time);
end
'd5: begin
    in <= 8'd25;
    shift <= 4'd1;
    assert(rounded == 9'd12) else $fatal("Assertion failed: rounded should be 12 at time %0t", $time);
end
'd6: begin
    in <= -8'd25;
    shift <= 4'd1;
    assert(rounded == -9'd12) else $fatal("Assertion failed: rounded should be -12 at time %0t", $time);
end
default: begin
    in <= 8'd0;
    shift <= 4'd0;
end
endcase
end
   assign rounded = (in >>> shift) + (((in >>> (shift - 1)) & 1) & ((in >>> shift) & 1));


endmodule
/* verilator lint_on WIDTH */        

