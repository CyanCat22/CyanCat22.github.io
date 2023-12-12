import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.11961b2a.js";const p="/assets/figure1.97fb2b71.png",o="/assets/position2.1b12b726.png",e="/assets/position.c45c9c7f.png",t="/assets/padding_mask.05b4f1ae.png",r="/assets/attention.d0d7183a.png",c="/assets/self_attention.f815085a.png",_=JSON.parse('{"title":"🌟Transformer 学习，实现 🌟","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":":","6":"T","7":"r","8":"a","9":"n","10":"s","11":"f","12":"o","13":"m","14":"e","15":"r","16":"_","17":"n","18":"o","19":"t","20":"e","21":" ","22":"t","23":"a","24":"g","25":"s","26":":","27":"[","28":"T","29":"r","30":"a","31":"n","32":"s","33":"f","34":"o","35":"r","36":"m","37":"e","38":"r","39":",","40":"n","41":"l","42":"p","43":"]"},"headers":[{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[{"level":4,"title":"库&参数","slug":"库-参数","link":"#库-参数","children":[]},{"level":4,"title":"Step1 Positional Encoding","slug":"step1-positional-encoding","link":"#step1-positional-encoding","children":[]},{"level":4,"title":"Tip1 torch.unsqueeze()","slug":"tip1-torch-unsqueeze","link":"#tip1-torch-unsqueeze","children":[]},{"level":4,"title":"Tip2 torch.transpose(dim0, dim1)","slug":"tip2-torch-transpose-dim0-dim1","link":"#tip2-torch-transpose-dim0-dim1","children":[]},{"level":4,"title":"Tip3 register_buffer","slug":"tip3-register-buffer","link":"#tip3-register-buffer","children":[]},{"level":4,"title":"Step2 Pad_Mask and Subsequence Mask","slug":"step2-pad-mask-and-subsequence-mask","link":"#step2-pad-mask-and-subsequence-mask","children":[]},{"level":4,"title":"Tip4 torch.eq()","slug":"tip4-torch-eq","link":"#tip4-torch-eq","children":[]},{"level":4,"title":"Tip5 np.triu()","slug":"tip5-np-triu","link":"#tip5-np-triu","children":[]},{"level":4,"title":"Step3 ScaledDotProductAttention","slug":"step3-scaleddotproductattention","link":"#step3-scaleddotproductattention","children":[]},{"level":4,"title":"Step4 MultiHeadAttention","slug":"step4-multiheadattention","link":"#step4-multiheadattention","children":[]},{"level":4,"title":"Tip6 torch.matmul()","slug":"tip6-torch-matmul","link":"#tip6-torch-matmul","children":[]},{"level":4,"title":"Tip7 masked_fill()","slug":"tip7-masked-fill","link":"#tip7-masked-fill","children":[]},{"level":4,"title":"Step5 FeedForward Layer","slug":"step5-feedforward-layer","link":"#step5-feedforward-layer","children":[]},{"level":4,"title":"Step6 Encoder","slug":"step6-encoder","link":"#step6-encoder","children":[]},{"level":4,"title":"Step7 Decoder","slug":"step7-decoder","link":"#step7-decoder","children":[]},{"level":4,"title":"Tip7 torch.gt()","slug":"tip7-torch-gt","link":"#tip7-torch-gt","children":[]},{"level":4,"title":"Step8 Transformer","slug":"step8-transformer","link":"#step8-transformer","children":[]},{"level":4,"title":"Step9 损失函数，优化器","slug":"step9-损失函数-优化器","link":"#step9-损失函数-优化器","children":[]},{"level":4,"title":"Step11 训练","slug":"step11-训练","link":"#step11-训练","children":[]}]}],"relativePath":"src/Transformer/01/trans_learn_note.md","lastUpdated":1702353660000}'),F={name:"src/Transformer/01/trans_learn_note.md"},y=l("",59),D=[y];function i(A,B,u,b,d,m){return n(),a("div",null,D)}const f=s(F,[["render",i]]);export{_ as __pageData,f as default};
