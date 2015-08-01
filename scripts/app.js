// the React UI
var PuzzleWord = React.createClass({
  bannerOrWord: function() {
    if (this.props.banner) {
      if (this.props.banner === winMessage) {
        return <span className="win">{ winMessage }</span>;
      } else {
        return <span className="lose">{ loseMessage }</span>;
      }
    }
    return this.props.word;
  },

  render: function() {
    return <div className="banner">{this.bannerOrWord()}</div>
  }
});

var PuzzleApp = React.createClass({
  getInitialState: function() {
    return { word: "မြန်မာဘာသာ", randomOrder: "မြန်ာဘသ", typed: "", banner: "", disabled: false };
  },

  typeKey: function(i) {
    if (!this.state.disabled) {
      var newWord = this.state.typed + this.state.randomOrder[i];
      this.setState({ typed: newWord });
      if (newWord === this.state.word) {
        this.win();
      } else if (this.state.typed && this.state.word.indexOf(newWord) !== 0) {
        this.lose();
      }
    }
  },

  win: function() {
    this.setState({ disabled: true, banner: winMessage });
    wordsSolved++;

    var that = this;
    setTimeout(function() {
      that.pass();
    }, 1500);
  },

  lose: function() {
    this.setState({ disabled: true, banner: loseMessage });

    var that = this;
    setTimeout(function() {
      that.setState({
        typed: "",
        disabled: false,
        banner: ""
      });
    }, 1500);
  },

  pass: function() {
    var randomWord = getRandomWord();
    var rearranged = randomize(randomWord);
    this.setState({
      word: randomWord,
      randomOrder: rearranged,
      typed: "",
      disabled: false,
      banner: ""
    });
  },

  render: function() {
     return (
       <div>
         <h4>char-combo</h4>
         <PuzzleWord word={this.state.word} banner={this.state.banner} />
         <h3 className="typeWord">{this.state.typed}</h3>
         {this.state.randomOrder.split("").map(function(chr, i) {
           return <button onClick={this.typeKey.bind(this, i)}>{chr}</button>;
         }, this)}
         <button className="pass" onClick={this.pass}>Pass</button>
       </div>
     )
  }
});

React.render(<PuzzleApp />, document.getElementById("node"));
